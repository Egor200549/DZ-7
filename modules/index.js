window.onload = () => {
    document.querySelectorAll('.header__button').forEach((item) => {
        item.addEventListener('click', () => {
            document.querySelector('.mvng_menu').classList.toggle('mvng_menu__closing');
            setTimeout(() => {
                document.querySelector('.mvng_menu').classList.toggle('none');
                document.querySelector('.header__nav').classList.toggle('none');
                document.querySelector('.rest_field').classList.toggle('none');
            }, 500)
        })
    })

    let documentHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.documentElement.clientHeight
    )

    document.querySelector('.rest_field').style.height = documentHeight + 'px';
    let links = document.querySelectorAll('.page_link');

    function note_link(item) {
        links.forEach((el) => el.classList.remove('current_link'));
        item.classList.add('current_link');
    }

    let height_start = document.getElementById('start').offsetTop - 1;
    let height_01 = document.getElementById('step__01').offsetTop - 1;
    let height_02 = document.getElementById('step__02').offsetTop - 1;
    let height_03 = document.getElementById('step__03').offsetTop - 1;

    window.addEventListener('scroll', () => {
        let scrollTop = document.documentElement.scrollTop;
        if (scrollTop >= height_start && scrollTop < height_01)
            note_link(links[0]);
        else if (scrollTop >= height_01 && scrollTop < height_02)
            note_link(links[1]);
        else if (scrollTop >= height_02 && scrollTop < height_03)
            note_link(links[2]);
        else
            note_link(links[3]);
    })
}