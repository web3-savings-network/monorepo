import * as React from 'react';
// @ts-ignore
import PropTypes from 'prop-types';

import {  useAccount } from 'wagmi';

interface IsWalletConnectedProps {
  children: React.ReactNode;
  loading: React.ReactNode;
  enableButton: boolean;
}

export const IsWalletConnected = ({
  children,
  loading,
}: IsWalletConnectedProps) => {
  const data = useAccount();
  if (!data?.address) return loading;
  return children;
};

IsWalletConnected.defaultProps = {
  loading: null,
};

IsWalletConnected.propTypes = {
  loading: PropTypes.func,
};

export default IsWalletConnected;
