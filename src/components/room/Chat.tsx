import { useEffect, useRef, useState } from 'react';
import useInput from '../../hooks/useInput';

export const Chat = () => {
    const text = useInput('');
    const [messages, setMessages] = useState<string[]>([]);
    const webSocket = useRef<WebSocket | null>(null);

    useEffect(() => {
        webSocket.current = new WebSocket('wss://websocket-url');
        webSocket.current.onopen = () => {
            console.log('WebSocket 연결!');
        };
        webSocket.current.onclose = (error) => {
            console.log(error);
        };
        webSocket.current.onerror = (error) => {
            console.log(error);
        };
        webSocket.current.onmessage = (event: MessageEvent) => {
            setMessages((prev) => [...prev, event.data]);
        };

        return () => {
            webSocket.current?.close();
        };
    }, []);

    return (
        <div className="chatBox">
            <div className="chatBoxTitle">
                <img src="/images/thumbnail/soccer.png" /> 축구모임
            </div>
            <div className="chatTextBox">
                <div className="chat ch1">
                    <div className="icon"></div>
                    <div className="textbox">
                        <div className="nick">최웅준</div>안녕하세요.
                        반갑습니다.
                    </div>
                </div>
                <div className="chat ch2">
                    <div className="icon"></div>
                    <div className="textbox">
                        <div className="nick">구태현</div>
                        안녕하세요. 구태현. 그동안 잘 지내셨어요?
                    </div>
                </div>
                <div className="chat ch1">
                    <div className="icon"></div>
                    <div className="textbox">
                        <div className="nick">최웅준</div>
                        아유~ 너무요너무요! 요즘 어떻게 지내세요?
                    </div>
                </div>
                <div className="chat ch2">
                    <div className="icon"></div>
                    <div className="textbox">
                        <div className="nick">구태현</div>
                        알거 없으시잖아요
                    </div>
                </div>
            </div>
            <div className="inputTextBox">
                <input {...text} placeholder="메세지를 입력해주세요" />
                <button>전송</button>
            </div>
        </div>
    );
};
