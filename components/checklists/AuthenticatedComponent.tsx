import React from 'react';

import { styles } from '@/components/styles';

type AuthenticatedComponentProps = {
  isAuthorized: boolean;
  isPublic: boolean;
  onTogglePrivacy: () => void;
};

const AuthenticatedComponent: React.FC<AuthenticatedComponentProps> = ({ isAuthorized, isPublic, onTogglePrivacy }) => {
  if (isAuthorized) {
    return (
      <>
        {isPublic ? <h2 className="text-center">Public</h2> : <h2 className="text-center">Private</h2>}
        <button className={`${styles['buttonsMain']} `} onClick={onTogglePrivacy}>
          {isPublic ? 'PRIVATE' : 'PUBLIC'}
        </button>
      </>
    );
  } else {
    return (
      <>
        <h2 className="text-center">Public</h2>
        <button className={`${styles['buttonsMain']} `}>PUBLIC</button>
      </>
    );
  }
};

export default AuthenticatedComponent;
