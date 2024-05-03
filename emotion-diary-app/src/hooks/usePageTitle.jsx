import { useEffect } from "react";

const usePageTitle = (title) => {
    useEffect(() => {
        // 관례상 DOM 요소를 저장하는 변수에는 달러 기호($)를 써준다.
        const $title = document.getElementsByTagName('title')[0];
        $title.innerText = title;
    }, [title]);
};

export default usePageTitle;