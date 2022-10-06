export default function Validate(input) {
    let error = {};
  if (!input.username) {
    error.username = 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    error.username = 'Username is invalid';
  } 
  
  if(!input.password) {
    error.password = 'Password is required';
  } else if (!/(?=.*[0-9])/.test(input.password)) {
    error.password = 'Password is invalid';
  }

  return error;
}

