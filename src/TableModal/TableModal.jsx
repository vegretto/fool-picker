import {Button, Modal} from "antd";
import {useDispatch} from "react-redux";

const TableModal = (props) => {

    const dispatch = useDispatch()

    const handleOk = () => {
        dispatch({ type: 'closeModal' });
    };

    const handleCancel = () => {
        dispatch({ type: 'closeModal' });
    };

    return (
        <Modal title={props.modal.title} visible={props.modal.isVisible} onOk={handleOk} onCancel={handleCancel} footer={[
            <Button key="submit" type="primary" onClick={handleOk}>
                OK
            </Button>,
        ]}>
            <p>{props.modal.description}</p>
        </Modal>
    )
}

export default TableModal;