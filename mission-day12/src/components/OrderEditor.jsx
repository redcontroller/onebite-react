import { useState, useRef } from "react";
import "./OrderEditor.module.css";

const OrderEditor = () => {
    const menuRef = useRef();
    const addressRef = useRef();
    const [order, setOrder] = useState({
        menu: "",
        address: "",
        request: "",
    });

    const onChangeOrder = (e) => {
        setOrder({
            ...order,
            [e.target.name]: e.target.value, // 변수 사용해서 새로운 객체 키 설정
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        // menu ? null : confirm("메뉴 선택을 해주세요 ~");
        // address ? null : confirm("주소를 입력해주세요 ~");
        if (order.menu && order.address) {
            alert(`✨ 주문이 완료되었습니다 ✨\n메뉴: ${order.menu},\n주소: ${order.address},\n요청사항: ${order.request}`);
            setOrder({
                menu: "",
                address: "",
                request: "",
            });
        } else if (!order.menu) {
            // confirm("메뉴는 필수로 입력해주세요 ~ 🎈");
            menuRef.current.focus();
        } else {
            // confirm("주소는 필수로 입력해주세요 ~ 🎈");
            addressRef.current.focus();
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
            <select
                ref={menuRef}
                name="menu"
                style={{ width: 300, padding: 5 }}
                value={order.menu}
                onChange={onChangeOrder}
            >
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
                ref={addressRef}
                name="address"
                style={{ width: 300, padding: 5 }}
                placeholder="주소) 서울특별시 xx동 .."
                value={order.address}
                onChange={onChangeOrder}
            />
            </div>
            <div>
            <div style={{ marginBottom: 5, fontSize: 14 }}>
                배달 요청사항
            </div>
            <textarea
                name="request"
                style={{ width: 300, padding: 5 }}
                placeholder="배달 요청사항을 써 주세요..."
                value={order.request}
                onChange={onChangeOrder}
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