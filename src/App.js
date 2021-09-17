//TODO Добавить добавление кастомного игрока

import './App.css';
import PlayersQty from "./PlayersQty/PlayersQty";
import RolesTableWrapper from "./RolesTableWrapper/RolesTableWrapper";
import {useDispatch, useSelector} from "react-redux";


function App() {
    const isPlayersSelectorVisible = useSelector((state) => state.playersSelector.isVisible)
    const players = useSelector((state) => state.players)
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
    return (
        <main>
            {isPlayersSelectorVisible ?
                <PlayersQty setPlayersSelectorVisible={setPlayersSelectorVisible} players={players}
                            updatePlayers={updatePlayers}/> :
                <RolesTableWrapper setPlayersSelectorVisible={setPlayersSelectorVisible} players={players}/>
            }
        </main>
    );
}

export default App;
