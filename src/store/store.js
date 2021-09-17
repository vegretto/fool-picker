import {createStore} from "redux";

let initialState = {
    players: [
        {id: 0, label: 'Денис', value: 'Денис', checked: true},
        {id: 1, label: 'Сергей 1', value: 'Сергей 1', checked: true},
        {id: 2, label: 'Анна', value: 'Анна', checked: true},
        {id: 3, label: 'Сергей 2', value: 'Сергей 2', checked: true}],

    playersSelector: {
        isVisible: true
    },

    modal: {
        isVisible: false,
        title: '...',
        description: '...'
    },

    roles: [
        {
            id: 0,
            name: 'Варвар',
            color: '#000',
            bgColor: '#afafaf',
            roleRules: 'Отбивается 1 раз за игру, нельзя вернуть в игру'
        },
        {
            id: 1,
            name: 'Танк',
            color: '#000',
            bgColor: '#51885d',
            roleRules: 'Может отбить одной картой две'
        },
        {
            id: 2,
            name: 'Некромант',
            color: '#fff',
            bgColor: '#212121',
            roleRules: 'Воскрешает 2 карты из отбоя в руку сопернику 3 раза за игру'
        },
        {
            id: 3,
            name: 'Ядовитый',
            color: '#000',
            bgColor: '#00ff1f',
            roleRules: 'Делает укол с ядом 2 раза за игру'
        },
        {
            id: 4,
            name: 'Дамагер',
            color: '#000',
            bgColor: '#ff5151',
            roleRules: 'Может подкидывать +- 1 карту по номиналу'
        },
        {
            id: 5,
            name: 'Плут',
            color: '#000',
            bgColor: '#f8ff8d',
            roleRules: 'Два козыря'
        },
        {
            id: 6,
            name: 'Отражатель',
            color: '#000',
            bgColor: '#ce8e00',
            roleRules: 'Отражает карту 2 раза за игру'
        },
        {
            id: 7,
            name: 'Реверсивный',
            color: '#000',
            bgColor: '#b912ff',
            roleRules: 'Бьет большие карты меньшими, может 1 раз вернуть себе 2 свои карты из отбоя'
        }
    ],
}

let appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'updatePlayers':
            const playersCopy = [...state.players]
            playersCopy[action.id].checked = action.checked
            return {
                ...state,
                players: playersCopy
            }
        case 'setPlayersSelectorVisible':
            return {
                ...state,
                playersSelector: {
                    isVisible: action.value
                }
            }
        case 'openModal':
            let clickedRole = initialState.roles[action.roleId]
            return {
                ...state,
                modal: {
                    isVisible: true,
                    title: clickedRole.name,
                    description: clickedRole.roleRules
                }
            };
        case 'closeModal':
            return {
                ...state,
                modal: {
                    isModalVisible: false,
                }
            };
        default:
            return state
    }
}

let store = createStore(appReducer);

export default store;