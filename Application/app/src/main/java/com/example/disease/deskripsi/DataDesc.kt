package com.example.disease.deskripsi

import android.os.Parcelable
import kotlinx.android.parcel.Parcelize

@Parcelize
data class DataDesc(
    var namapenyakit: String?,
    var gambar: Int?,
    var descpenyakit: String?,
    var obat: String?,

    ):Parcelable
