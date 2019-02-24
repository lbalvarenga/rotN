function rot(phrase, n, decode)
{
    var rotphrase = "";
    for (var i = 0; i < phrase.length; ++i)
    {
        var char = phrase[i];
        if (char != ' ')
        {
            if (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z')
            {
                if (char.toLowerCase().charCodeAt(0) < 'a'.charCodeAt(0) + n)
                    char = String.fromCharCode(char.charCodeAt(0) + n);
                else
                    char = String.fromCharCode(char.charCodeAt(0) - n);
            }
        }
        rotphrase += char;
    }
    return rotphrase;
}

function cipher(decode)
{
    var phrase = $('#plain-text').val();
    var n = $('#rot-n').val();

    var ciphertext = rot(phrase, parseInt(n), decode);

    $('#rotated-text').text(ciphertext);
    $('#rotated-text-list').show();
}

function copy(element_id)
{
    navigator.clipboard.writeText($(element_id).text()).then(function() {
        $('#copy-data').popover('show');
        setTimeout(function() {
            $('#copy-data').popover('hide');
        }, 1000);
    });
}

$('#rotated-text-list').hide();

// Enable popovers
$(function() {
    $('[data-toggle="popover"]').popover({
        trigger: 'manual'
    });
});