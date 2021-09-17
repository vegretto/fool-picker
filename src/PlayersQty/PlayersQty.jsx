import {Button, Checkbox, Row, Col} from "antd";
import './PlayersQty.css'
import Title from "antd/es/typography/Title";

const PlayersQty = (props) => {
    const btnOnClick = () => {
        props.setPlayersSelectorVisible(false);
    }
    const onChange = (e) => {
        props.updatePlayers(e.target.playerId, e.target.checked);
    }

    const playersCheckboxes = props.players.map((player, index) => {
        return (
            <Col key={index} span={12}>
                <Checkbox className="custom-checkbox" playerId={player.id} checked={player.checked} value={player.value} onChange={onChange}>{player.label}</Checkbox>
            </Col>
        )
    })

    return (
        <div className="container container--qty">
            <div className={"players-qty"}>
                <div className="players-qty__inner">
                    <Title>Игроки</Title>
                        <Row gutter={[16, 16]} align={'middle'} justify={'center'}>
                            {playersCheckboxes}
                        </Row>
                    <br />
                    <Button type="primary" size="large" onClick={btnOnClick}>GO</Button>
                </div>
            </div>
        </div>
    )
}

export default PlayersQty;