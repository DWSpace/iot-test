import mitt from 'mitt';

// Tạo một instance của event bus
const eventBus = mitt();

// Xuất event bus để có thể sử dụng ở các thành phần khác
export default eventBus;