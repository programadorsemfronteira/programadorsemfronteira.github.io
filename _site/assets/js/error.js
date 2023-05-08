const typerHandler = () => {

    let running;
    const instances = [];

    const startNext = () => {
        const next = running + 1;

        if ( instances.length <= next ) {
            return;
        }

        instances[next].start();
        running = next;
    }

    return (index, element) => {
        const $element = $(element);
        const length = $element.text().length;
        const string = $element.html();
        $element.html('');

        const instance = new Typed($element.get(0), {
            strings: [string],
            typeSpeed: length > 100 ? 18 : 30,
            backSpeed: 0,
            loop: false,
            showCursor: false,
            onStart: () => $element.addClass('typing'),
            onComplete: () => $element.removeClass('typing') && startNext(),
        });

        if ( running !== undefined ) {
            instance.stop();
        } else {
            $element.addClass('typing')
            running = index;
        }

        instances.push(instance);
    }
}


($ => {
    const typer = typerHandler();
    $('code').each((i, element) => typer(i, element));
})(jQuery);