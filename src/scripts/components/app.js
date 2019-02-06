$(()=>{

    //select
    (() => {
        const $selects = $('.tm-select .select-wrapper');

        $selects.each(function () {
            const $selectWrapper = $(this);
            const $select = $selectWrapper.find('.select-trigger');
            const $dropdown = $selectWrapper.find('.select-dropdown');
            const $input = $selectWrapper.find('input');

            $dropdown.on('click', '.select-option', event, function () {
                const $target = $(event.target);

                if($target.attr('data-value')){
                    if($target.attr('data-value') === "") return false;
                    const optionText = $target.text();

                    $select.text(optionText);
                    $input.val($target.attr('data-value'));

                    //$select.trigger('click');
                    //$dropdown.hide();
                    UIkit.dropdown($dropdown).hide();
                }
            });
        })
    })();

});