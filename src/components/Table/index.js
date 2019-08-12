/**
 *
 * TomoWallet - Common Table Component
 *
 * This component defines a common table component for all pages,
 * based on React Table module.
 */
// ===== IMPORTS =====
// Modules
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { get as _get, isEqual as _isEqual } from 'lodash';
// Custom Components
// -- TO-DO: Update style for common Table component
import { CommonTableStyler, PaginationStyler } from './style';

// ===================

// ===== MAIN COMPONENT =====
class CommonTable extends PureComponent {
  constructor(props) {
    super(props);
    const { getConfigProps, setConfig } = props;

    this.state = {
      columns: setConfig(getConfigProps),
    };

    this.handleUpdateConfig = this.handleUpdateConfig.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (
      !_isEqual(
        _get(prevProps, 'getConfigProps'),
        _get(this.props, 'getConfigProps'),
      )
    ) {
      this.handleUpdateConfig();
    }
  }

  handleUpdateConfig() {
    const { getConfigProps, setConfig } = this.props;
    this.setState({
      columns: setConfig(getConfigProps),
    });
  }

  render() {
    const { data, getTableProps } = this.props;
    const { columns } = this.state;
    return (
      <CommonTableStyler
        columns={columns}
        data={data}
        defaultPageSize={5}
        height={150}
        PaginationComponent={PaginationStyler}
        {...getTableProps}
      />
    );
  }
}
// ==========================

// ===== PROP TYPES =====
CommonTable.propTypes = {
  /** Table column configuration */
  columns: PropTypes.arrayOf(PropTypes.object),
  /** Table data */
  data: PropTypes.arrayOf(PropTypes.object),
  /** Object of configuration generator arguments */
  getConfigProps: PropTypes.object,
  /** Action to generate table configuration */
  setConfig: PropTypes.func,
  /** Object of React Table configuration properties */
  tableConfig: PropTypes.object,
};

CommonTable.defaultProps = {
  columns: [],
  data: [],
  getConfigProps: {},
  setConfig: () => [],
  tableConfig: {},
};
// ======================

export default CommonTable;
