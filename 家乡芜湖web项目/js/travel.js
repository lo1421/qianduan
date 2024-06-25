// Interactive elements handling
document.addEventListener('DOMContentLoaded', function() {
    // Plan generator
    const planBtn = document.getElementById('planBtn');

    planBtn.addEventListener('click', function() {
        alert('这里可以添加旅行计划生成的具体逻辑。');
    });

    // Submit review
    const submitReview = document.getElementById('submitReview');
    const userReview = document.getElementById('userReview');

    submitReview.addEventListener('click', function() {
        const review = userReview.value.trim();
        if (review !== '') {
            alert('评价已提交：' + review);
            userReview.value = '';
        } else {
            alert('请输入评价
