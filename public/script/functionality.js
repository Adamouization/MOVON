/**
 * Created by Samu on 26/03/2017.
 */
$(document).ready(function(){
    $("#reservation").click(function () {
        $("#erase").addClass('hide');
    });
    $("#changeDate1").click(function () {
        $("#date").html('Monday 27th of March');
    });
    $("#changeDate2").click(function () {
        $("#date").html('Tuesday 28th of March');
    });
    $("#changeDate3").click(function () {
        $("#date").html('Wednesday 29th of March');
    });
    $("#changeDate4").click(function () {
        $("#date").html('Thursday 30th of March');
    });
});