# Incorrect Usage of $inc Operator in MongoDB Update

This example demonstrates an error that can occur when using the `$inc` operator in MongoDB's `updateOne` method. The `$inc` operator is used to increment a numeric field by a specified value. However, if you attempt to increment the field with a string value instead of a numeric value, the operation will fail.

## Bug
The bug lies in the incorrect usage of the `$inc` operator.  The provided value for increment should be a number. Providing a string will result in an error.