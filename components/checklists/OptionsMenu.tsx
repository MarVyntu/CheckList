import { styles } from '@/components/styles';

type OptionsMenuProps = {
  handlers: {
    handleToggleEdit: () => void;
    handleDelete: () => void;
    handleSave: () => void;
    handleCancel: () => void;
  };
  btnLabel: {
    firstLabel: string;
    secondLabel: string;
  };
  state: {
    showEditMenu: boolean;
  };
};

const OptionsMenu = ({ handlers, btnLabel, state }: OptionsMenuProps) => {
    const { handleToggleEdit, handleDelete, handleSave, handleCancel } = handlers
    const { firstLabel, secondLabel } = btnLabel
    const { showEditMenu } = state

    const handleFirstButton = () => {
        if (showEditMenu) {
            handleSave()
        } else {
            handleToggleEdit()
        }
    }
    const handleSecondButton = () => {
        if (showEditMenu) {
            handleCancel()
        } else {
            handleDelete()
        }
    }

    return (
        <div className={`${styles['BackroundDropMenu']}`}>
            <button className={`${styles['buttonsDropMenu']} `} onClick={handleFirstButton}>
                {firstLabel}
            </button>
            <button className={`${styles['buttonsDropMenu']} `} onClick={handleSecondButton}>
                {secondLabel}
            </button>
        </div>
    )
}
export default OptionsMenu
