import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Global, Content } from '../../style';


import api from '../../services/api';
import Menu from '../../components/Menu'

export default function Categoria(){

    const [ usuarios, setUsuarios ] = useState([]);
    const [ isLoader, setIsLoader ] = useState(false)

    React.useEffect(() => {
        setIsLoader(true)
        setTimeout(() => {
            api.get('/user')
            .then(function (response) {
                setUsuarios(response.data.Users)
            })
            .catch(function (err){
                console.log(err)
            })
            .then(() => {
                setIsLoader(false);
            })
        }, [])
    }, [])        

    const useStyles = makeStyles({
        table: {
          minWidth: 650,
        },
      });

    const classes = useStyles();

    return(
        <Global>
            <Menu />
            <Content>
                <h1>Usuários</h1>
                {isLoader ? (
                    <h1>Carregando...</h1>
                ) : (
                    <TableContainer component={Paper}>
                        <Table className={classes.table} size="small" aria-label="a dense table" >
                            <TableHead>
                            <TableRow>
                                <TableCell align="left">#</TableCell>
                                <TableCell align="left">Nome</TableCell>
                                <TableCell align="left">Username</TableCell>
                                <TableCell align="left">E-mail</TableCell>
                                <TableCell align="left">Criado Em</TableCell>
                                <TableCell align="left">Ativa?</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {usuarios.map((usuarios) => (
                                <TableRow key={usuarios.id}>
                                <TableCell align="left">{usuarios.id}</TableCell>
                                <TableCell align="left">{usuarios.name}</TableCell>
                                <TableCell align="left">{usuarios.username}</TableCell>
                                <TableCell align="left">{usuarios.email}</TableCell>
                                <TableCell align="left">{usuarios.creation_date}</TableCell>
                                <TableCell align="left">{usuarios.isativo = true ? ( <span>Sim</span> ) : ( <span>Não</span> )}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )} 
            </Content>
        </Global>
    )
}