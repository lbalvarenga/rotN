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
                {
                    char = String.fromCharCode('a'.charCodeAt(0) + (char.charCodeAt(0) - 'z'.charCodeAt(0) + (n - 1)));
                    console.log(('a'.charCodeAt(0) + (char.charCodeAt(0) - 'z'.charCodeAt(0) + (n - 1))));
                }
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