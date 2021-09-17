import {Table} from "antd";
import {useEffect, useState} from "react";
import "./RolesTable.css";
import {useDispatch} from "react-redux";

const RolesTable = (props) => {

    const [tableData, setTableData] = useState([])
    const dispatch = useDispatch()

    const handleOpenModal = (e) => {
        dispatch({ type: 'openModal', roleId: e.target.dataset.id });
    }
    const columns = [
        {
            title: 'Игрок',
            dataIndex: 'player',
            key: 'player',
            render(text, record) {
                return {
                    props: {
                        style: {
                            color: record.color,
                            background: record.bgColor
                        },
                    },
                    children: <div>{text}</div>,
                };
            },
        },
        {
            title: 'Роль',
            dataIndex: 'role',
            key: 'role',
            render: (text, record) => {
                return {
                    props: {
                        style: {
                            color: record.color,
                            background: record.bgColor
                        },
                    },
                    children: <span className='roleLink' data-id={record.dataRole}
                                    onClick={handleOpenModal}>{text}</span>
                }
            }
        },
        {
            title: 'Количество карт',
            dataIndex: 'cardNum',
            key: 'cardNum',
            render(text, record) {
                return {
                    props: {
                        style: {
                            color: record.color,
                            background: record.bgColor
                        },
                    },
                    children: <div>{text}</div>,
                };
            },
        },
        {
            title: 'Кол-во возвращений в игру',
            dataIndex: 'resNum',
            key: 'resNum',
            render(text, record) {
                return {
                    props: {
                        style: {
                            color: record.color,
                            background: record.bgColor
                        },
                    },
                    children: <div>{text}</div>,
                };
            },
        },
    ]

    useEffect(() => {
        if (tableData.length === 0) {
            let data = [];
            props.players.forEach((player) => {

                if (player.checked) {
                    let randomRole = props.roles[props.getRandomInt(0, props.roles.length)];
                    let newDataEntity = {
                        key: player.id,
                        player: player.label,
                        role: randomRole.name,
                        dataRole: randomRole.id,
                        color: randomRole.color,
                        bgColor: randomRole.bgColor,
                        cardNum: randomRole.id === 0 ? 9 : props.getRandomInt(5, 8),
                        resNum: randomRole.id === 0 ? 0 : props.getRandomInt(1, 3),
                    }

                    data.push(newDataEntity);
                }
            })
            setTableData(data)
        }
    }, [props, tableData.length])

    return (
        <Table pagination={false} columns={columns} dataSource={tableData}/>
    )
}

export default RolesTable;