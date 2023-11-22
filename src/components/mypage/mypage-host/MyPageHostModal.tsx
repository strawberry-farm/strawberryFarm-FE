import React from 'react'

export default function MyPageHostModal() {
  return (
    <div className='mypage-host-modal'>
      <div className="mypage-host-modal-title">신청 목록</div>
      <ul className='list'>
        <li className="item">
          <a>
            <div className="">
              <div className="profile">
                <img src="" alt="" />
              </div>
              <div className="title"></div>
              <div className="button-wrapper">
                <button type="button"></button>
                <button type="button"></button>
              </div>
            </div>
          </a>
          <div className="detail">
            <div className="question">
              <div className="question-mark">
                <img src="" alt="" />
              </div>
              <div className="question-text"></div>
            </div>
            <div className="answer">
              <div className="answer-profile">
                <img src="" alt="" />
              </div>
              <div className="answer-text"></div>
            </div>
          </div>
        </li>
      </ul>

    </div>
  )
}
