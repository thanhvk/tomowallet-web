/**
 *
 * TomoWallet - Common Table Style
 *
 */
// ===== IMPORTS =====
// Modules
import ReactTable from 'react-table';
import styled from 'styled-components';
import { Pagination } from 'reactstrap';
// ===================

// ===== STYLE =====
const CommonTableStyler = styled(ReactTable)`
  .rt-table {
    .rt-thead {
      .rt-th {
        display: inline-block;
      }
    }
    .rt-tbody {
      .rt-td {
        display: inline-block;
      }
    }
  }
`;

const PaginationStyler = styled(Pagination)``;
// =================

export { CommonTableStyler, PaginationStyler };
