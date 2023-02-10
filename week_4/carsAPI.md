# Cars API

## **getWithLicence(licence)**

functiosn returns the cars that match the given licence. The licence is unique.

- if the car is found, returns card object
- if no car wuth given licence is found, returns null

## **getWithModel(model)**

return all car objects with given model in an array

- if no car matches the given model, an empty array is returned.

## **getAllModels()**

returns the names of all models in storage as an array of string. The name is added to the arrays only once.

- returns arry of models
- returns an empty array, if no models found

## **getCars(key, value)**

get all car objects that matches the given key-value pair.

- returns car objects in an array.
- if there is no matches, returns an empty array
