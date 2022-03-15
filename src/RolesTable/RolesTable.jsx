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
                            background: `linear-gradient(${record.bgColor[0]} 50%, ${record.bgColor[1]} 100%)`
                        },
                    },
                    children: <div>{text}</div>,
                };
            },
        },
        {
            title: 'Роль',
            dataIndex: 'roles',
            key: 'roles',
            render: (text, record) => {
                console.log(record);
                return {
                    props: {
                        style: {
                            color: record.color,
                            background: `linear-gradient(${record.bgColor[0]} 50%, ${record.bgColor[1]} 100%)`
                        },
                    },
                    children:
                        <div className={'roles-list'}>
                            {record.roles.map((role, index) => {
                                return (
                                    <span key={index} className='roleLink' data-id={role.dataRole}
                                          onClick={handleOpenModal}>{role.role}{index === 0 ? ', ': ''}</span>
                                )
                            })}
                        </div>
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
                            background: `linear-gradient(${record.bgColor[0]} 50%, ${record.bgColor[1]} 100%)`
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
                            background: `linear-gradient(${record.bgColor[0]} 50%, ${record.bgColor[1]} 100%)`
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
            let roleQty = 1;
            if (props.gameModes[0].isOn === true) {
                roleQty = 2;
            }
                if (player.checked) {
                    let randomRole;
                    let firstRandomRole;
                    let roles = [];
                    let bgColors = [];
                    for (let i = 0; i < roleQty; i++) {
                        randomRole = props.roles[props.getRandomInt(0, props.roles.length)];
                        bgColors.push(randomRole.bgColor);
                        if (i === 0) {
                            firstRandomRole = randomRole;
                        }
                        let role = {
                            role: randomRole.name,
                            dataRole: randomRole.id,
                            color: randomRole.color,
                        }
                        roles.push(role);
                    }
                    const newDataEntity = {
                        key: player.id,
                        player: player.label,
                        roles: roles,
                        bgColor: bgColors,
                        color: firstRandomRole.color,
                        cardNum: firstRandomRole.id === 0 ? 9 : props.getRandomInt(5, 8),
                        resNum: firstRandomRole.id === 0 ? 0 : props.getRandomInt(1, 3),
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