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
import NumberFormat from 'react-number-format';


import api from '../../services/api';
import Menu from '../../components/Menu'

export default function Produto(){

    const [ produtos, setProdutos ] = useState([]);
    const [ isLoader, setIsLoader ] = useState(false)

    React.useEffect(() => {
        setIsLoader(true)
        setTimeout(() => {
            api.get('/produto')
            .then(function (response) {
                setProdutos(response.data.Produtos)
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
                <h1>Produtos</h1>
                {isLoader ? (
                    <h1>Carregando...</h1>
                ) : (
                    <TableContainer component={Paper}>
                        <Table className={classes.table} size="small" aria-label="a dense table" >
                            <TableHead>
                            <TableRow>
                                <TableCell align="left">#</TableCell>
                                <TableCell align="left">Nome</TableCell>
                                <TableCell align="left">Descrição</TableCell>
                                <TableCell align="left">Valor</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {produtos.map((produtos) => (
                                <TableRow key={produtos.id}>
                                <TableCell align="left">{produtos.id}</TableCell>
                                <TableCell align="left">{produtos.name}</TableCell>
                                <TableCell align="left">{produtos.description}</TableCell>
                                <TableCell align="left"><NumberFormat value={produtos.cost} displayType={'text'} thousandSeparator={true} prefix={'R$'} /></TableCell>
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