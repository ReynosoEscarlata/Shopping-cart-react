import React from 'react'

export default function UserInfo() {
    return (
        <>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Nombre Completo</label>
                <input type="text" className="form-control" id="name"/>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
                <label className="form-label" for="exampleCheck1">Número celular</label>
                <input type="phone" className="form-control" id="phone" />
            </div>
        </>
    )
}
