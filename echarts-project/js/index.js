/**
 * @author YangLing
 * @date 2022/7/29 15:14
 */
(function (){
    $(document).ready(function (){
        $(".tabs li").click(function (){
            $(this).addClass('active').siblings("li").removeClass('active');
        })
    })
})();

