import "./Header.css";
import { memo } from 'react';

const Header = () => {
    return (
        <div className="Header">
            <h3>오늘은 📆</h3>
            <h1>{new Date().toDateString()}</h1>
        </div>
    );
};

// react.memo 메소드 적용하여 불필요한 리렌더링 제거하여 웹 서비스 최적화
// const memoizedHeader = memo(Header);

// export default memoizedHeader;

export default memo(Header);