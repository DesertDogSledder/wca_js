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

function format_num(n)
{
    let format_str = ''
    if (n >= 0) format_str = '+';

    return format_str + n;
}

// Source: Ege Özcan https://stackoverflow.com/a/4760279
function dynamic_sort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}

// Source: Ege Özcan https://stackoverflow.com/a/4760279
function dynamic_sort_multiple() {
    /*
     * save the arguments object as it will be overwritten
     * note that arguments object is an array-like object
     * consisting of the names of the properties to sort by
     */
    var props = arguments;
    return function (obj1, obj2) {
        var i = 0, result = 0, numberOfProperties = props.length;
        /* try getting a different result from 0 (equal)
         * as long as we have extra properties to compare
         */
        while(result === 0 && i < numberOfProperties) {
            result = dynamic_sort(props[i])(obj1, obj2);
            i++;
        }
        return result;
    }
}