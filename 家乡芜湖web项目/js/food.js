// Modal and interactive elements handling
document.addEventListener('DOMContentLoaded', function() {
    // Modal
    const modal = document.getElementById('recipeModal');
    const btn = document.getElementById('recipeBtn');
    const span = document.getElementsByClassName('close')[0];

    btn.onclick = function() {
        modal.style.display = 'block';
    }

    span.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    // Submit comment
    const submitBtn = document.getElementById('submitComment');
    const commentBox = document.getElementById('userComment');

    submitBtn.addEventListener('click', function() {
        const comment = commentBox.value.trim();
        if (comment !== '') {
            alert('评论已提交：' + comment);
            commentBox.value = '';
        } else {
            alert('请输入评论内容。');
        }
    });
});
