import  { useContext } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {

  const {createUser}=useContext(AuthContext)

  const handelRegister = e => {
    e.preventDefault()
    const form =new FormData(e.currentTarget)
    const email =form.get('email')
    const photo =form.get('photo')
    const name =form.get('name')
    const password = form.get('password')
    console.log(email,password,photo,name)

    createUser(email,password)
    .then(result =>{
      console.log(result.user)
    })
    .catch(error =>{
      console.log(error)
    })
  }
  return (
    <div>
      <Navbar></Navbar>

      <div>
        <h2 className="text-3xl my-10 text-center">Please Register</h2>
        <form onSubmit={ handelRegister} className="lg:w-1/2 md:w-3/4 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input type="text" name='photo' placeholder="photo" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button  type="submit" className="btn btn-primary">Register</button>
          </div>
        </form>
        <p className="text-center">Already have account <Link to='/login' className="text-blue-400">Login</Link></p>
      </div>
    </div>
  );
};

export default Register;