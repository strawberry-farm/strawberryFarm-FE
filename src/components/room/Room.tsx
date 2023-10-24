import { Chat } from './Chat';
import RoomMemu from './RoomMemu';

export const Room = () => {
    return (
        <div className="roomLayout">
            <div className="roomTitle">내 채팅방</div>
            <div className="roomBox">
                <RoomMemu />
                <Chat />
            </div>
        </div>
    );
};
