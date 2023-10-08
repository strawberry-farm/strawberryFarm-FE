import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { writeState } from '../../atom/writeState';

const WritePicture = (props: {
    setView: React.Dispatch<React.SetStateAction<number>>;
}) => {
    const [fileName, setfileName] = useState();
    const [folder, setFolder] = useState();
    const [tagText, setTagText] = useState('');
    const [tagBox, setTagBox] = useState(['모임']);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTagText(e.target.value);
    };

    const keyUp = (e: React.KeyboardEvent) => {
        if (e.code === 'Enter') {
            // 엔터키가 눌렸을 때 실행
            if (!tagText.trim()) {
                alert('공백을 허용하지않습니다.');
                setTagText('');
                return;
            } else {
                setTagBox([...tagBox, tagText]);
                setTagText('');
            }
        }
    };
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };
    const removes = (e: React.MouseEvent) => {
        const target = e.target as HTMLDivElement;
        const targetParentNode = target.parentNode as HTMLDivElement;

        if (target.innerText === 'X') {
            if (targetParentNode === null) return;
            targetParentNode.remove();
        }
    };
    /**
     *  업로드
     * @param {e} 정보 받음
     *  파일 데이터 받은후  postData에 저장;
     *    */
    const uploadHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const target: any = e.currentTarget;
        const files = (target.files as FileList)[0];
        if (files === undefined) {
            return;
        } else {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(files);
            fileReader.addEventListener('loadend', (e: any) => {
                setfileName(e.target.result);
            });
            const formData: any = new FormData();
            console.log(formData, 'formData');
            formData.append('files', files);
            setFolder(formData);
        }
    };
    const [write, setWtite] = useRecoilState(writeState);
    const onNextOnclick = () => {
        setWtite({
            ...write,
            tag: tagBox,
            imge: folder,
        });
        //
        props.setView((prev) => prev + 1);
    };

    return (
        <div className="writeTitleLayout">
            <div className="title">
                사진 및 태그 <span className="subTitle">(필수)</span>
            </div>
            <div className="titleBox">
                <div className="inputTitle">
                    사진 <span className="subTitle">(필수)</span>&nbsp;
                    <span className="subSpan">
                        모임을 대표하는 이미지를 등록해 주세요.
                    </span>
                </div>
                <div className="fileBox">
                    <label htmlFor="file">
                        <img
                            src={fileName || '/icons/WritePicture.webp'}
                            alt="사진추가"
                        />
                    </label>
                    <input
                        type="file"
                        id="file"
                        onChange={uploadHandler}
                        accept="image/*"
                    />
                </div>
                <div className="hashTagBox">
                    <div className="hashTagTitle">
                        태그 <span className="subTitle">(선택)</span>&nbsp;
                        <span className="subSpan">
                            최대 5개까지 가능합니다.
                        </span>
                    </div>
                    <form action="#" className="tag_form" onSubmit={onSubmit}>
                        <label>
                            <div className="input_box">
                                <div className="input_cacreate">
                                    {tagBox.map((tag, i) => {
                                        return (
                                            <div className="tag_text" key={i}>
                                                {tag}
                                                <div onClick={removes}>X</div>
                                            </div>
                                        );
                                    })}
                                    <input
                                        type="text"
                                        placeholder="Press enter to add tags"
                                        onChange={onChange}
                                        onKeyUp={keyUp}
                                        value={tagText}
                                    />
                                </div>
                            </div>
                        </label>
                    </form>
                </div>
            </div>
            <div className="btnLayout">
                <div
                    className="prevBtn"
                    onClick={() => props.setView((prev) => prev - 1)}
                >
                    이전
                </div>
                <div className="nextBtn" onClick={onNextOnclick}>
                    다음
                </div>
            </div>
        </div>
    );
};

export default WritePicture;
