import React from 'react'
import PropTypes from '@dhis2/prop-types'
import moment from 'moment'
import i18n from '@dhis2/d2-i18n'
import {
    Table,
    TableHead,
    TableRowHead,
    TableRow,
    TableCell,
    TableCellHead,
    TableBody,
} from '@dhis2/ui'
import TableWrapper from './TableWrapper.js'

const TopFavoritesTable = ({ data }) => (
    <TableWrapper>
        <Table>
            <TableHead>
                <TableRowHead>
                    <TableCellHead>{i18n.t('Position')}</TableCellHead>
                    <TableCellHead>{i18n.t('Name')}</TableCellHead>
                    <TableCellHead>{i18n.t('Views')}</TableCellHead>
                    <TableCellHead>{i18n.t('ID')}</TableCellHead>
                    <TableCellHead>{i18n.t('Created')}</TableCellHead>
                </TableRowHead>
            </TableHead>
            <TableBody>
                {data.map(({ position, name, views, id, created }) => {
                    const timestamp = moment(created).format('MMM D, YYYY')

                    return (
                        <TableRow key={id}>
                            <TableCell>{position}</TableCell>
                            <TableCell>{name}</TableCell>
                            <TableCell>{views}</TableCell>
                            <TableCell>{id}</TableCell>
                            <TableCell>{timestamp}</TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    </TableWrapper>
)

TopFavoritesTable.propTypes = {
    data: PropTypes.array.isRequired,
}

export default TopFavoritesTable
