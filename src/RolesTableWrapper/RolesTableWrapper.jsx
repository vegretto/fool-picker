import {Button, Col, Row} from "antd";
import TableModal from "../TableModal/TableModal";
import RolesTable from "../RolesTable/RolesTable";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";



const RolesTableWrapper = (props) => {


    const roles = useSelector((state) => state.roles)
    const modal = useSelector((state) => state.modal)

    const [firstMover, setFirstMover] = useState('...')


    useEffect(() => {
        if (firstMover === '...') {
            const chooseFirstMover = () => {
                const checkedPlayers = props.players.filter((player) => {
                    return(player.checked)
                })
                if (checkedPlayers.length > 0) {
                    const randomPlayer = checkedPlayers[getRandomInt(0, checkedPlayers.length)];
                    return (
                        randomPlayer.label
                    )
                }
                return "никто. Недостаточно игроков"
            }
            setFirstMover(chooseFirstMover());
        }
    }, [firstMover, props.players])


    const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    const btnOnClick = () => {
        props.setPlayersSelectorVisible(true);
    }

    return (
        <div className="container container--main">
            <Row justify="center">
                <Col xs={24} lg={12} align="center">
                    <RolesTable roles={roles} players={props.players} getRandomInt={getRandomInt}/>
                    <br />
                    <div>Ходит { firstMover }</div>
                    <br />
                    <Button type="primary" size="large" onClick={btnOnClick}>Новая партия</Button>
                </Col>
            </Row>
                <TableModal modal={modal} />
        </div>
    )
}

export default RolesTableWrapper;