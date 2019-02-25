function rot(phrase, n, decode)
{
    var rotphrase = "";
    if (decode)
        n = 26 - n;

    for (var i = 0; i < phrase.length; ++i)
    {
        var char = phrase[i];
        if (char != ' ')
        {
            if (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z')
            {
                if (String.fromCharCode(char.toLowerCase().charCodeAt(0) + n) > 'z')
                    char = String.fromCharCode('a'.charCodeAt(0) + (char.charCodeAt(0) - 'z'.charCodeAt(0) + (n - 1)));
                else
                    char = String.fromCharCode(char.charCodeAt(0) + n);
            }
        }
        rotphrase += char;
    }
    return rotphrase;
}

function cipher(decode)
{
    var phrase = $('#plain-text').val();
    if (phrase == "")
        return;
    var n = $('#rot-n').val();

    var ciphertext = rot(phrase, parseInt(n), decode);

    $('#rotated-text').text(ciphertext);
    $('#rotated-text-list').slideDown();

    // Scroll to rotated-text-list
    $('html, body').animate({
        scrollTop: parseInt($('#rotated-text-list').offset().top)
    }, 1000);

    return;
}

function copy_fallback(element_id)
{
    var textarea = document.createElement('textarea');
    textarea.value = $(element_id).text();

    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();

    try
    {
        document.execCommand('copy');
    }
    catch (err)
    {
        console.error('Could not copy to clipboard.');
    }

    document.body.removeChild(textarea);
    return;
}

function copy(element_id)
{
    if (!navigator.clipboard)
    {
        copy_fallback(element_id);

        $('#copy-data').popover('show');
        setTimeout(function() {
            $('#copy-data').popover('hide');
        }, 1000);
        return;
    }

    navigator.clipboard.writeText($(element_id).text()).then(function() {
        $('#copy-data').popover('show');
        setTimeout(function() {
            $('#copy-data').popover('hide');
        }, 1000);
    });
    return;
}

$('#rotated-text-list').hide();

$('#plain-text').on('input', function() {
    $('#rotated-text-list').slideUp();
});

// Enable popovers
$(function() {
    $('[data-toggle="popover"]').popover({
        trigger: 'manual'
    });
});
