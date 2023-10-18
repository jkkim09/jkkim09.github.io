import { SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material';
import EventNoteIcon from '@material-ui/icons/EventNote';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import EmojiHomeIcon from '@material-ui/icons/Home';


const BottomMenu = ({ history }) => {
    const actions = [
        { 
            icon: <EmojiHomeIcon />,
            name: '메인',
            event: () => {
                history.push('/')
            }
        },
        { 
            icon: <EventNoteIcon />,
            name: '일정',
            event: () => {
                history.push('/calender')
            }
        },
        {
            icon: <EmojiPeopleIcon/>,
            name: '프로필',
            event: () => {
                history.push('/profile')
            }
        }
    ]


    return (
        <div>
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'fixed', bottom: 30, right: 10 }}
                icon={<SpeedDialIcon />}
            >
                {actions.map((action) => (
                <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    onClick={action.event}
                />
                ))}
            </SpeedDial>
        </div>
    )
}

export default BottomMenu