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