import { useState } from 'react';
import Input from '../../@common/input/Input';


export default function MyPageLikeKeyword() {
    const [keyword, setKeyword] = useState('')
    const [keywordList, setKeywordList] = useState<{text: string; value: string}[]>()

    const onClickAddKeyword = () => {
        const keywordItem = {text: keyword, value: keyword};
        const newKeywordList = keywordList ? [keywordItem, ...keywordList] : [keywordItem]
        setKeywordList(newKeywordList)
        setKeyword('')
    }

    return (
        <div className="mypage-likeKeyword">
            <h2 className="mypage-title">관심 키워드 설정</h2>
            <div className="mypage-likeKeyword-form">
                <Input
                    type="text"
                    placeholder="키워드를 입력하세요"
                    defaultValue={keyword}
                    setValue={setKeyword}
                />
                <button type='button' className='mypage-likeKeyword-submit-button button-basic' onClick={onClickAddKeyword}>등록</button>
            </div>
            <div className="mypage-likeKeyword-list">
            {keywordList?.map((keyword) => { 
                return (
                    <span className='mypage-likeKeyword-item button-blue'>
                        {keyword.text}
                        <button type='button' className='mypage-likeKeyword-item-button'>
                            <img src="/icons/cancel.png" alt="" />
                        </button>
                    </span>
                )
            })}
            </div>
        </div>

    );
}
