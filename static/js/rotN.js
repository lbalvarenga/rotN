function rot(phrase, n)
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

function get_data()
{
    var phrase = $("#plaintext").val();
    $("#ciphertext").text(rot(phrase, parseInt($("#rotcipher").val())));
    $("#text-banner").show();
}