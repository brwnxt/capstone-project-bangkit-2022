package com.example.disease.deskripsi

import android.content.Intent
import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.example.disease.databinding.ItemRowUserBinding
import com.example.disease.deskripsi.DetailDescActivity.Companion.EXTRA_DATA

class ListDescAdapter(private val listUser: ArrayList<DataDesc>) : RecyclerView.Adapter<ListDescAdapter.ListViewHolder>() {

    inner class ListViewHolder(private val bindingItemRowUserBinding: ItemRowUserBinding) :
        RecyclerView.ViewHolder(bindingItemRowUserBinding.root) {
        fun bind(user: DataDesc){
            bindingItemRowUserBinding.apply {
                tvNamaPenyakit.text = user.namapenyakit
            }

            itemView.setOnClickListener() {
                val intent = Intent(itemView.context, DetailDescActivity::class.java)
                intent.putExtra(EXTRA_DATA, user)
                itemView.context.startActivity(intent)
            }
        }
    }

    private lateinit var onItemClickCallback: OnItemClickCallback

    fun setOnItemClickCallback(onItemClickCallback: OnItemClickCallback) {
        this.onItemClickCallback = onItemClickCallback
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ListViewHolder {
        val bindingItemRowUserBinding = ItemRowUserBinding.inflate(LayoutInflater.from(parent.context), parent, false)
        return ListViewHolder(bindingItemRowUserBinding)
    }

    override fun onBindViewHolder(holder: ListViewHolder, position: Int) {
        holder.bind(listUser[position])

    }

    override fun getItemCount(): Int = listUser.size

    interface OnItemClickCallback {
        fun onItemClicked(data: DataDesc)
    }

}