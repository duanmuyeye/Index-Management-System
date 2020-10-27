$(function() {
    'use strict';

    // Default
    $('.repeater-default').repeater();

    // Custom Show / Hide Configurations
    $('.file-repeater, .email-repeater').repeater({
        show: function() {
            $(this).slideDown();
        },
        hide: function(remove) {
            if (confirm('你确定要删除这项吗?')) {
                $(this).slideUp(remove);
            }
        }
    });


});