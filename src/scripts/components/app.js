$(()=>{

    //select
    (() => {
        const $selects = $('.tm-select .select-wrapper');

        $selects.each(function () {
            const $select = $(this).find('.select-trigger');
            const $dropdown = $(this).find('.select-dropdown');
            const $input = $(this).find('input');

            $dropdown.on('click', '.select-option', event, function () {
                const $target = event.target;

                if($target.dataset.value){
                    if($target.dataset.value == "") return false;
                    const optionText = $($target).text();

                    $select.text(optionText);
                    $input.val($target.dataset.value);

                    $select.click();
                    //$dropdown.hide();
                    //UIkit.dropdown($dropdown).hide();
                }
            });
        })
    })();

});