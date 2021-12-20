Codecamp 10

Pongsakorn Praditkanok

Exercise Methods ของ Object

1. การทำงานของ code ดังกล่าวจะได้อะไรออกมา
```
let user = {
  name: "John",
  go: function() { alert(this.name) }
}

(user.go)()
```
2. การทำงานของ code ดังกล่าวจะได้อะไรออกมา
```
function makeUser() {
  return {
    name: "John",
    ref: this
  };
};

let user = makeUser();

alert( user.ref.name ); // What's the result?
```
3. สร้าง object calculator จาก 3 methods นี้:
    - read() ใช้ prompts สำหรับรับค่ามา 2 ค่าและเก็บเป็น object properties.
    - sum() คืนค่าผลบวกของ 2 ค่านั้น.
    - mul() คืนค่าผลคูณของ 2 ค่านั้น.
4. ให้ Object ชื่อ ladder มี method ขึ้น และ ลง
    - Object ชื่อ ladder สามารถเรียก function แบบนี้ได้
    - ดัดแปลง Object ชื่อ ladder สามารถเรียก function แบบนี้ได้
