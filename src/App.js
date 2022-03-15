//TODO Добавить добавление кастомного игрока
//TODO Добавить блэклист ролей

import './App.css';
import PlayersQty from "./PlayersQty/PlayersQty";
import RolesTableWrapper from "./RolesTableWrapper/RolesTableWrapper";
import {useDispatch, useSelector} from "react-redux";


function App() {
    const isPlayersSelectorVisible = useSelector((state) => state.playersSelector.isVisible)
    const players = useSelector((state) => state.players)
    const gameModes = useSelector((state) => state.gameModes)
    const dispatch = useDispatch()

    const updatePlayers = (id, checked) => {
        dispatch({
            type: 'updatePlayers',
            id,
            checked
        })
    }

    const setPlayersSelectorVisible = (value) => {
        dispatch({
            type: 'setPlayersSelectorVisible',
            value
        })
    }

    const setGameMode = (gameMode, value) => {
        dispatch({
            type: 'setGameMode',
            gameMode,
            value
        })
    }
    return (
        <main>
            {isPlayersSelectorVisible ?
                <PlayersQty setPlayersSelectorVisible={setPlayersSelectorVisible} players={players}
                            updatePlayers={updatePlayers} gameModes={gameModes} setGameMode={setGameMode}/> :
                <RolesTableWrapper setPlayersSelectorVisible={setPlayersSelectorVisible} players={players} gameModes={gameModes}/>
            }
        </main>
    );
}

export default App;
