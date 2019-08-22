/**
 *
 * TomoWallet - Table Configuration - Portfolio Table
 *
 */
// ===== IMPORTS =====
// Modules
import React from 'react';
import { Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Custom Components
import TokenCell from './subcomponents/TokenCell';
// Constants
import { PORTFOLIO_COLUMNS, SEND_TOKEN_FIELDS } from '../../constants';
import { MSG } from '../../../../constants';
import { TextBlue, TextYellowPointer } from '../../../../styles';

// ===================

// ===== CONFIGURATION =====
export default ({
  formatMessage,
  openReceiveTokenPopup,
  openSendTokenPopup,
}) => [
  {
    Header: formatMessage(MSG.MY_WALLET_TABLE_PORTFOLIO_HEADER_TOKEN_NAME),
    columns: [
      {
        headerClassName: 'd-none',
        accessor: PORTFOLIO_COLUMNS.TOKEN_NAME,
        Cell: ({ value }) => (
          <TokenCell formatMessage={formatMessage} value={value} />
        ),
      },
    ],
  },
  {
    Header: formatMessage(MSG.MY_WALLET_TABLE_PORTFOLIO_HEADER_BALANCE),
    columns: [
      {
        headerClassName: 'd-none',
        accessor: PORTFOLIO_COLUMNS.BALANCE,
        Cell: ({ value }) =>
          value.toLocaleString(undefined, {
            minimumFractionDigits: 3,
          }),
      },
    ],
  },
  {
    Header: formatMessage(MSG.MY_WALLET_TABLE_PORTFOLIO_HEADER_VALUE),
    columns: [
      {
        headerClassName: 'd-none',
        accessor: PORTFOLIO_COLUMNS.VALUE,
        Cell: ({ value }) =>
          value.toLocaleString(undefined, {
            minimumFractionDigits: 3,
          }),
      },
    ],
  },
  {
    Header: formatMessage(MSG.MY_WALLET_TABLE_PORTFOLIO_HEADER_PRICE),
    columns: [
      {
        headerClassName: 'd-none',
        accessor: PORTFOLIO_COLUMNS.PRICE,
        Cell: ({ value }) => value,
      },
    ],
  },
  {
    // Header: ({ searchToken }) => (
    //   <InputGroup size='sm'>
    //     <Input name='searchToken' value={searchToken} />
    //     <InputGroupAddon addonType='append'>
    //       <InputGroupText>
    //         <FontAwesomeIcon icon='search' />
    //       </InputGroupText>
    //     </InputGroupAddon>
    //   </InputGroup>
    // ),
    accessor: 'abc',
    columns: [
      {
        headerClassName: 'd-none',
        accessor: PORTFOLIO_COLUMNS.SEND,
        Cell: ({ original }) => (
          <TextYellowPointer
            role='presentation'
            onClick={() =>
              openSendTokenPopup({
                [SEND_TOKEN_FIELDS.TOKEN]: original,
                isTokenSpecific: true,
              })
            }
          >
            {formatMessage(MSG.COMMON_BUTTON_SEND)}
          </TextYellowPointer>
        ),
      },
      {
        headerClassName: 'd-none',
        accessor: PORTFOLIO_COLUMNS.RECEIVE,
        Cell: () => (
          <TextBlue role='presentation' onClick={openReceiveTokenPopup}>
            {formatMessage(MSG.COMMON_BUTTON_RECEIVE)}
          </TextBlue>
        ),
      },
      {
        Cell: () => (
          <div className='text-right'>
            <FontAwesomeIcon icon='ellipsis-v' />
          </div>
        ),
      },
    ],
  },
];
// =========================
