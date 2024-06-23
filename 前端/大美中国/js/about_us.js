document.addEventListener('DOMContentLoaded', () => {
    // JS 动画效果
    const teamMembers = document.querySelectorAll('.team-member');

    teamMembers.forEach(member => {
        member.addEventListener('mouseenter', () => {
            member.style.transform = 'translateY(-10px)';
        });

        member.addEventListener('mouseleave', () => {
            member.style.transform = 'translateY(0)';
        });
    });
});
