// JavaScript code for history and culture page interactions

document.addEventListener('DOMContentLoaded', function() {
    // Sample data for timeline (can be replaced with actual historical events)
    const timelineData = [
        { date: '前500年', event: '芜湖文化初现' },
        { date: '公元100年', event: '芜湖成为重要贸易城市' },
        { date: '1369年', event: '芜湖建城' },
        { date: '1900年', event: '太平天国战乱' },
        { date: '1949年', event: '新中国成立后的发展' }
    ];

    // Function to generate timeline HTML
    function generateTimeline(data) {
        const timelineElement = document.getElementById('timeline');
        if (!timelineElement) return;

        let html = '<h4>重要历史事件时间轴</h4>';
        html += '<ul>';
        data.forEach(item => {
            html += `<li><span class="event">${item.event}</span><br><span class="date">${item.date}</span></li>`;
        });
        html += '</ul>';

        timelineElement.innerHTML = html;
    }

    // Generate timeline on page load
    generateTimeline(timelineData);
});

