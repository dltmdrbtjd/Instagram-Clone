# Instagram Clone
- 주소 : http://22teamclone.shop/
- 유튜브 : https://www.youtube.com/watch?v=GtaLFIjpkXI
- github : https://github.com/dltmdrbtjd/Instagram-Clone

## 팀원
- Front-End : 이승규 , 편원준 ( 2명 )
- Back-End : 이태강 , 전영진 ( 2명 )

## Front-End 역할 분배
- 이승규 : 좋아요 , 댓글(C,R,D) , 게시글(R,D) , 프로필, 프로필 변경(aws s3), 팔로우, api관리, router관리, 기타 오류수정
- 편원준 : 로그인(jwt), 회원가입(regExp), 게시글(C,U 및 aws s3)

## 프로젝트명 : 인스타그램 클론 코딩
- 개요 : 기존에 존재하는 인스타그램 SNS를 클론하여 만들 프로젝트이다.
- 구성기능 : 로그인, 회원가입, 게시글(CRUD) , 댓글(CRD), 프로필, 프로필 변경, 좋아요, 팔로우
- 사용기술 : React, Redux, axios
- 서버통신 : axios
- 상태관리 : Redux
- 백엔드 : https://github.com/BlossomWhale/Instagram_Clone_sv
- 기본 페이지 구성 : 로그인, 회원가입,메인페이지,게시글 작성 및 수정페이지, 상세페이지, 유저 프로필 페이지, 프로필 변경페이지

## Redux module 관리
- board.js : 게시물 및 댓글 관련
- follow.js : 팔로우 관련
- image.js : 이미지 처리 관련
- like.js : 좋아요 기능 관리
- user.js : 유저 정보 관리
- userinfo.js : 유저 프로필 관리

## 세부 사용 기술
- Redux : redux-actions , redux-thunk , redux-logger , store를 통하여 데이터를 전역적으로 관리 , immer사용으로 불변성관리
- rotuer : connected-react-router, react-rotuer-dom , history
- style : styled-components , styled-reset , 최소단위 element componet 제작하여 사용
- axios : api.js 를 만들어 각 api에 필요한 axios들을 통합하여 관리함
- login : jwt토큰을 통한 인증방식으로 로그인 후 cookie에 토큰을 저장하여 사용
- regExp : 회원가입시 정규표현식 사용
- image : AWS S3 서버를 활용하여 프론트측에서 image에 관련된 기능을 모두 처리하고 서버쪽에 url만 보내주고 받는 형식으로 진행
- 조건부 렌더링 : 게시글 수정,삭제 및 댓글 삭제 등등 조건부 렌더링 활용하여 현재 로그인한 회원가 일치할시에만 보여줌

## 사용한 패키지
- materail-ui
- aws-sdk
- axios
- connected-rotuer-dom
- history
- immer
- react-redux
- redux
- react-router-dom
- redux-actions
- redux-logger
- redux-thunk
- styled-components
- styled-reset
- yarn
