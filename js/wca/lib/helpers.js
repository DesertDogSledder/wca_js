// Source: https://www.nickang.com/how-to-clone-class-instance-javascript/
function deep_copy(original)
{
    var copied = Object.assign(
        Object.create(
          Object.getPrototypeOf(original)
        ),
        original
      );
    return copied;
}

function sort_object(orig_obj)
{
    let keys = Object.keys(orig_obj);
    keys.sort();

    let sorted_obj = {};
    let i;

    for (i=0; i<keys.length; i++)
    {
        sorted_obj[keys[i]] = 0;
    }

    for (key in sorted_obj)
    {
        sorted_obj[key] = orig_obj[key];
    }

    return sorted_obj;
}