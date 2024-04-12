import {useState} from "react";

const OrderEditor = () => {
    const [menu, setMenu] = useState("");
    const [address, setAddress] = useState("");
    const [request, setRequest] = useState("");

    const onChangeMenu = (e) => {
        setMenu(e.target.value);
    }

    const onChangeAddress = (e) => {
        setAddress(e.target.value);
    }
    const onChangeRequest = (e) => {
        setRequest(e.target.value);
    }

    const onSubmit = () => {
        // menu ? null : confirm("메뉴 선택을 해주세요 ~");
        // address ? null : confirm("주소를 입력해주세요 ~");
        if (menu && address) {
            alert(`✨ 주문이 완료되었습니다 ✨\n메뉴: ${menu},\n주소: ${address},\n요청사항: ${request}`);
        } else {
            confirm("메뉴와 주소는 필수로 입력해주세요 ~ 🎈")
        }
    }

    return (
        <form
            style={{ display: "flex", flexDirection: "column", gap: 10 }}
        >
            <h2>배달의민족 주문</h2>
            <div>
            <div style={{ marginBottom: 5, fontSize: 14 }}>
                메뉴 선택
            </div>
            <select style={{ width: 300, padding: 5 }} value={menu} onChange={onChangeMenu}>
                <option value={""}>선택</option>
                <option value={"족발"}>족발</option>
                <option value={"떡볶이"}>떡볶이</option>
                <option value={"아이스크림"}>아이스크림</option>
                <option value={"샐러드"}>샐러드</option>
            </select>
            </div>
            <div>
            <div style={{ marginBottom: 5, fontSize: 14 }}>
                배달 주소
            </div>
            <input
                style={{ width: 300, padding: 5 }}
                placeholder="주소) 서울특별시 xx동 .."
                value={address}
                onChange={onChangeAddress}
            />
            </div>
            <div>
            <div style={{ marginBottom: 5, fontSize: 14 }}>
                배달 요청사항
            </div>
            <textarea
                style={{ width: 300, padding: 5 }}
                placeholder="배달 요청사항을 써 주세요..."
                value={request}
                onChange={onChangeRequest}
            />
            </div>
            <div>
            <button
                onClick={onSubmit}
                style={{ width: 300, padding: 5 }}
            >
                주문 완료
            </button>
            </div>
        </form>
    );
};

export default OrderEditor;